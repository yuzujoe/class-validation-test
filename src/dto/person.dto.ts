import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class PersonDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly nameKana: string;

  @IsNumber()
  @IsNotEmpty()
  readonly age: number;
}
