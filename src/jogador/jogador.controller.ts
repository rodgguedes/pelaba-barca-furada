import { Body, Controller, Get, Post } from '@nestjs/common';
import { Jogador } from './jogador';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Controller('jogadores')
export class JogadoresController {
  constructor(@InjectModel(Jogador.name) private jogadorModel: Model<Jogador>) {}

  @Get()
  async listarJogadores(): Promise<Jogador[]> {
    return this.jogadorModel.find().exec();
  }

  @Post()
  async criarJogador(@Body() jogador: Jogador): Promise<Jogador> {
    const novoJogador = new this.jogadorModel(jogador);
    return novoJogador.save();
  }
}
