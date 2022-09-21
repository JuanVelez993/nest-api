
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Character {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column('text', { unique: true })
  name: string;
  @Column('text')
  description: string;
  @Column('text')
  thumbnail: string;
  
}
