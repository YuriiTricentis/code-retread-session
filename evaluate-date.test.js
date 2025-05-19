import { test, expect, describe, beforeAll, afterAll } from 'bun:test';
import { evaluateDate, date } from './evaluate-date.js';

describe('Date Expression Formatter', () => {
  const mockDate = new Date(2015, 11, 30, 15, 9, 0); // Dec 30, 2015, 3:09pm
  const originalDate = globalThis.Date;

  beforeAll(() => {
    // Mock the Date constructor to always return our fixed date
    globalThis.Date = class extends Date {
      constructor() {
        return mockDate;
      }
    };
  });

  afterAll(() => {
    // Restore the original Date constructor
    globalThis.Date = originalDate;
  });

  describe('evaluateDate function', () => {
    test('should format {DATE} correctly', () => {
      const result = evaluateDate('{DATE}');
      expect(result).toBe('30.12.2015');
    });

    test('should format {TIME} correctly', () => {
      const result = evaluateDate('{TIME}');
      expect(result).toBe('15:09:00');
    });

    test('should format {DATETIME} correctly', () => {
      const result = evaluateDate('{DATETIME}');
      expect(result).toBe('30.12.2015 15:09:00');
    });

    test('should format {YEAR} correctly', () => {
      const result = evaluateDate('{YEAR}');
      expect(result).toBe('2015');
    });

    test('should format {MONTH} correctly', () => {
      const result = evaluateDate('{MONTH}');
      expect(result).toBe('12');
    });

    test('should format {DAY} correctly', () => {
      const result = evaluateDate('{DAY}');
      expect(result).toBe('30');
    });

    test('should handle invalid expressions', () => {
      const result = evaluateDate('{INVALID}');
      expect(result).toBe('Invalid date expression');
    });
  });

  describe('date tagged template function', () => {
    test('should handle simple {DATE} expression', () => {
      const result = date`Today is ${{ '{DATE}': true }}`;
      expect(result).toBe('Today is 30.12.2015');
    });

    test('should handle multiple expressions', () => {
      const result = date`Date: ${{ '{DATE}': true }} and time: ${{
        '{TIME}': true,
      }}`;
      expect(result).toBe('Date: 30.12.2015 and time: 15:09:00');
    });

    test('should handle mixed expressions', () => {
      const name = 'Report';
      const result = date`${name} created on ${{ '{DATE}': true }} at ${{
        '{TIME}': true,
      }}`;
      expect(result).toBe('Report created on 30.12.2015 at 15:09:00');
    });

    test('should handle non-date expressions', () => {
      const count = 42;
      const result = date`There are ${count} items as of ${{ '{DATE}': true }}`;
      expect(result).toBe('There are 42 items as of 30.12.2015');
    });
  });
});
