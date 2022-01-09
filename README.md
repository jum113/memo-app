# テーブル設計

## users テーブル

| Column             | Type   | Options                   |
| ------------------ | ------ | ------------------------- |
| nickname           | string | null: false               |
| email              | string | null: false, unique: true |
| encrypted_password | string | null: false               |

### Association

- has_many :memos
- has_many :folders

## memos テーブル

| Column | Type       | Options                        |
| ------ | ---------- | ------------------------------ |
| memo   | text       |                                |
| user   | references | null: false, foreign_key: true |
| folder | references | null: false, foreign_key: true |

### Association

- belongs_to :user
- belongs_to :folder

## folders テーブル

| Column | Type       | Options                        |
| ------ | ---------- | ------------------------------ |
| folder | string     |                                |
| user   | references | null: false, foreign_key: true |

### Association

- belongs_to :user
- has_many :memos