import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @ApiProperty({ description: 'The Id of the user' })
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  _id: number;

  @ApiProperty()
  @Column()
  email: string;

  @ApiProperty()
  @Column()
  @Exclude()
  password: string;

  @ApiProperty()
  @Column()
  username: string;

  @ApiProperty({
    example: 'Sat Apr 23 2022 15:17:37 GMT+0200 (Central European Summer Time)',
    description: 'User creation date',
  })
  @Column()
  createdAt: Date;

  @ApiProperty({
    example: 'Sat Apr 23 2022 15:17:37 GMT+0200 (Central European Summer Time)',
    description: 'User update date',
  })
  @Column()
  updatedAt: Date;

  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }
}
