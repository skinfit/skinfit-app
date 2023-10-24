# 技術スタック
- TypeScript
- Next.js
- Tailwind CSS
- tRPC
- Prisma
- Supabase (Auth, DB, Storage)

# プロジェクト構造
```
./
|-- .github/            # GitHub Actions
|-- prisma/             # Prisma schema
|-- public/             # Public files
|-- src/                # Server-side code
|   |-- app/            # Next.js app
|   |   |-- auth/      # Authentication
|   |   |    |-- login/ # Login page
|   |   |    |-- signup/ # Signup pageP
|   |   |-- form/      # Forms
|   |   |-- pages/      # Pages
|   |   |-- api/        # tRPC API
|   |   |-- lib/        # Libraries
|   |   |-- styles/     # Tailwind CSS
|   |   |-- types/      # TypeScript types

|   |-- db/             # Prisma client    
|   |-- api/            # tRPC API
|   |-- components/     # React components
|   |-- features/       # Features
|       |-- auth/       # Authentication
|       |-- db/         # Database
|       |-- storage/    # Storage
|   |-- hooks/          # React hooks
|   |-- lib/           # Libraries
|   |-- stories/        # Storybook stories
|   |-- styles/         # Tailwind CSS
|   |-- types/          # TypeScript types






