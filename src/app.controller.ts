import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/version')
  @ApiOperation({ summary: 'Returns the current version of the API' })
  @ApiResponse({ status: 200, description: 'The current version of the API' })
  getHello(): string {
    return this.appService.getVersion();
  }
}
