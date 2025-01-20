import converterParaHexadecimal from './converter'
import { expect, test } from '@jest/globals'

test('converte 10 para hexadecimal', () => {
    expect(converterParaHexadecimal(10)).toBe('a');
});

test('converte 255 para hexadecimal', () => {
    expect(converterParaHexadecimal(255)).toBe('ff');
});