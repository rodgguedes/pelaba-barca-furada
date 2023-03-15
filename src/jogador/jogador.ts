import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type JogadorDocument = Jogador & Document;

@Schema()
export class Jogador {
    @Prop({ type: Number, integer: true })
    id: { type: number};

    @Prop()
    name: string;

    @Prop()
    position: ['Goleiro', 'Zagueiro', 'Meia', 'Ataque'];

    @Prop({ type: Number, float: true })
    stars: number;
}

export const JogadorSchema = SchemaFactory.createForClass(Jogador);