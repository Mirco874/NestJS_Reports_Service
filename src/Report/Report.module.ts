import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { Report } from "./schema/Report.schema";
import { ReportService } from "./service/Report.service";

@Module({
    imports: [TypeOrmModule.forFeature([Report]) ],
    providers: [ReportService],
    controllers: [],
    exports: [ReportService]
})

export class ReportModule{};
