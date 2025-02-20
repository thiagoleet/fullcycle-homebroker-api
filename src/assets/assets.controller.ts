import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AssetsService } from './assets.service';
import { CreateAssetDto } from './dto/create-asset.dto';
import { AssetsPresenter } from './assets.presenter';

@Controller('assets')
export class AssetsController {
  constructor(private readonly assetsService: AssetsService) {}

  @Post()
  async create(@Body() createAssetDto: CreateAssetDto) {
    const asset = await this.assetsService.create(createAssetDto);

    return new AssetsPresenter(asset);
  }

  @Get()
  async findAll() {
    const assets = await this.assetsService.findAll();

    return assets.map((asset) => new AssetsPresenter(asset));
  }

  @Get(':symbol')
  async findOne(@Param('symbol') symbol: string) {
    const asset = await this.assetsService.findOne(symbol);

    return new AssetsPresenter(asset!);
  }
}
