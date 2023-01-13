import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity("cities")
export class City {
  @PrimaryColumn({ type: "int" })
  id: number;

  @Column({ length: 40, unique: true })
  name: string;
}
