// Lightweight content checks that run without a browser.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const Module = require('node:module');
const source = fs.readFileSync(path.join(__dirname,'../src/data/content.ts'),'utf8');
const js = ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText;
const dataModule = new Module('content.js');
dataModule._compile(js,'content.js');
const {characters,cards,questions,phases,kingdoms} = dataModule.exports;
assert.equal(characters.length,12,'12 classic generals');
assert.equal(cards.length,13,'13 curated cards');
assert.equal(questions.length,10,'10 quiz questions');
assert.equal(phases.length,6,'6 phases');
assert.equal(new Set(characters.map(c=>c.slug)).size,characters.length);
assert.equal(new Set(cards.map(c=>c.slug)).size,cards.length);
assert.deepEqual([...new Set(characters.map(c=>c.kingdom))].sort(),Object.keys(kingdoms).sort());
for(const c of characters){assert.ok(c.skills.length && c.hp>0 && c.hp<6);assert.ok(fs.existsSync(path.join(__dirname,'../public/images/characters',c.slug+'.webp')),'image '+c.slug)}
for(const q of questions){assert.equal(q.choices.length,4);assert.ok(q.answer>=0&&q.answer<4);assert.ok(q.explanation.length>15)}
assert.match(cards.find(c=>c.slug==='wine').note,/not part of the original base set/i);
assert.ok(fs.existsSync(path.join(__dirname,'../public/images/hero.webp')));
console.log('Content checks passed: 12 generals, 13 cards, 6 phases, 10 questions, 13 illustration assets.');
