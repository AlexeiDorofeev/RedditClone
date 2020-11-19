import { Migration } from '@mikro-orm/migrations';

export class Migration20201119164751 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "user" drop constraint if exists "user_email_check";');
    this.addSql('alter table "user" alter column "email" type text using ("email"::text);');
    this.addSql('alter table "user" alter column "email" set not null;');
    this.addSql('alter table "user" add constraint "user_email_unique" unique ("email");');
  }

}
