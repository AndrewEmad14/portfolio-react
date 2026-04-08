import { describe, it, expect } from 'vitest';
import { readFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const README_PATH = resolve(__dirname, '../../README.md');

describe('README.md', () => {
  it('exists at the repository root', () => {
    expect(existsSync(README_PATH)).toBe(true);
  });

  it('contains the expected portfolio description', () => {
    const content = readFileSync(README_PATH, 'utf-8');
    expect(content).toContain('This is my current portfolio');
  });

  it('does not contain the old Vite/React boilerplate heading', () => {
    const content = readFileSync(README_PATH, 'utf-8');
    expect(content).not.toContain('# React + Vite');
  });

  it('does not contain the old boilerplate plugin references', () => {
    const content = readFileSync(README_PATH, 'utf-8');
    expect(content).not.toContain('@vitejs/plugin-react');
  });

  it('does not contain the old ESLint expansion section', () => {
    const content = readFileSync(README_PATH, 'utf-8');
    expect(content).not.toContain('Expanding the ESLint configuration');
  });

  it('does not contain the old React Compiler section', () => {
    const content = readFileSync(README_PATH, 'utf-8');
    expect(content).not.toContain('## React Compiler');
  });

  it('is non-empty', () => {
    const content = readFileSync(README_PATH, 'utf-8').trim();
    expect(content.length).toBeGreaterThan(0);
  });

  it('matches the exact expected content (boundary/regression check)', () => {
    const content = readFileSync(README_PATH, 'utf-8').trim();
    expect(content).toBe('This is my current portfolio');
  });
});