import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from 'dotenv';
import { Jogador, JogadorSchema } from './jogador/jogador';
import { JogadoresController } from './jogador/jogador.controller';

config();

@Module({
  imports: [ 
    MongooseModule.forRoot(process.env.DB_HOST),
    MongooseModule.forFeature([{ name: Jogador.name, schema: JogadorSchema }]),
  ],
  controllers: [AppController, JogadoresController],
  providers: [AppService],
})

export class AppModule {}
