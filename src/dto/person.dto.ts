import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
import { IsKana } from 'src/share/class-validator';

export class PersonDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @IsKana('kana')
  readonly nameKana: string;

  @IsNumber()
  @IsNotEmpty()
  readonly age: number;
}
