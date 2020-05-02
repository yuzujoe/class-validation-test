import { Validator } from 'class-validator';
import { IsKana } from './IsKana';

const validator = new Validator();

describe('IsKana', () => {
  class MyClass {
    @IsKana('kana')
    someString: string;
  }

  it('should be valid', () => {
    const obj = new MyClass();
    obj.someString = 'テスト';
    return validator.validate(obj).then(errors => {
      expect(errors.length).toBe(0);
    });
  });

  it('should be invalid', () => {
    const obj = new MyClass();
    obj.someString = 'てすと';
    return validator.validate(obj).then(errors => {
      expect(errors.length).toBe(1);
    });
  });
});
