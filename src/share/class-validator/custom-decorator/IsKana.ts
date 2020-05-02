import {
  ValidatorConstraint,
  ValidationOptions,
  registerDecorator,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

const regexp = /^[ァ-ー]+$/;

@ValidatorConstraint()
export class IsKanaConstraint implements ValidatorConstraintInterface {
  validate(text: string, args: ValidationArguments): boolean {
    return regexp.test(text);
  }

  defaultMessage(args: ValidationArguments): string {
    return 'nameKana should be a katakana';
  }
}

export function IsKana(
  property: string,
  validationOptions?: ValidationOptions,
) {
  return function(object: object, propertyName: string) {
    registerDecorator({
      name: 'IsKana',
      target: object.constructor,
      propertyName,
      constraints: [],
      options: validationOptions,
      validator: IsKanaConstraint,
    });
  };
}
