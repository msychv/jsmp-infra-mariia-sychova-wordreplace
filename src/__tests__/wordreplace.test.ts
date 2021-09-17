import { wordreplace } from '../index';

describe('Given wordreplace', () => {
  describe('when there is a word to replace', () => {
    it('should replace all occurrences of the word', () => {
      const str: string = 'Very quiet kid named Quiet is quiet today.';
      const result: string = 'Very loud kid named Quiet is loud today.';

      expect(wordreplace(str, 'quiet', 'loud')).toBe(result);
    });
  });

  describe('when there is no word to replace', () => {
    it('should not change given string', () => {
      const str: string = 'Random non-repeating words here.';

      expect(wordreplace(str, 'quiet', 'loud')).toBe(str);
    });
  });

  describe('when an empty string given', () => {
    it('should return an empty string', () => {
      expect(wordreplace('', 'quiet', 'loud')).toBe('');
    });
  });
});
