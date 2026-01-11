const fs = require('fs');
const path = require('path');

const DOCS_DIR = path.join(__dirname, '../docs');
const STUDY_DIR = path.join(__dirname, '../study-material');
const OUTPUT_FILE = path.join(__dirname, '../nav-config.js');
const ROOT_DIR = path.join(__dirname, '../');

interface NavItem {
    title: string;
    path: string;
}

interface NavGroup {
    category: string;
    items: NavItem[];
}

function extractTitle(filePath: string): string {
    try {
        const content = fs.readFileSync(filePath, 'utf-8');
        const match = content.match(/^#\s+(.+)$/m);
        return (match && match[1]) ? match[1].trim() : path.basename(filePath);
    } catch (e) {
        return path.basename(filePath);
    }
}

function processDirectory(dir: string, baseDir: string, lang: 'en' | 'pt'): NavItem[] {
    if (!fs.existsSync(dir)) return [];
    
    const files = fs.readdirSync(dir);
    const items: NavItem[] = [];

    for (const file of files) {
        if (!file.endsWith('.md')) continue;
        
        const isPt = file.endsWith('_pt.md');
        const isEn = file.endsWith('_en.md') || (!isPt && !file.includes('_'));
        
        // Exact match for lang or fallback/default logic
        // If lang is 'pt', we want '_pt.md'.
        // If lang is 'en', we want '_en.md' OR files with no suffix (defaulting to en).
        
        const shouldInclude = lang === 'pt' ? isPt : isEn;

        if (shouldInclude) {
            const fullPath = path.join(dir, file);
            const relPath = path.relative(ROOT_DIR, fullPath);
            items.push({
                title: extractTitle(fullPath),
                path: relPath.replace(/\\/g, '/')
            });
        }
    }
    return items;
}

function generateConfig() {
    const enDocs = processDirectory(DOCS_DIR, 'docs', 'en');
    const ptDocs = processDirectory(DOCS_DIR, 'docs', 'pt');
    const enStudy = processDirectory(STUDY_DIR, 'study-material', 'en');
    const ptStudy = processDirectory(STUDY_DIR, 'study-material', 'pt');

    // Add READMEs manually
    if (fs.existsSync(path.join(ROOT_DIR, 'README.md'))) {
        enDocs.unshift({ title: 'Overview', path: 'README.md' });
    }
    if (fs.existsSync(path.join(ROOT_DIR, 'README_pt.md'))) {
        ptDocs.unshift({ title: 'Visão Geral', path: 'README_pt.md' });
    }

    const config = {
        en: [
            { category: "Documentation", items: enDocs },
            { category: "Study Material", items: enStudy }
        ],
        pt: [
            { category: "Documentação", items: ptDocs },
            { category: "Material de Estudo", items: ptStudy }
        ]
    };

    const fileContent = `window.FILES = ${JSON.stringify(config, null, 4)};`;
    fs.writeFileSync(OUTPUT_FILE, fileContent);
    console.log(`Generated ${OUTPUT_FILE}`);
}

generateConfig();
