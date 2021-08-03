import {MigrationInterface, QueryRunner} from "typeorm";

export class addImageUrlImageUrl1628003066179 implements MigrationInterface {
    name = 'addImageUrlImageUrl1628003066179'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `profiles` ADD `imageUrl` varchar(255) NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `profiles` DROP COLUMN `imageUrl`");
    }

}
