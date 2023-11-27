-- CreateTable
CREATE TABLE "Cargo" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "Cargo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Empresa" (
    "id" SERIAL NOT NULL,
    "nome_fantasia" TEXT NOT NULL,
    "cnpj" BIGINT NOT NULL,
    "endereco" TEXT,
    "nome_representante" TEXT,
    "nome_comercial" TEXT,
    "telefone_comercial" BIGINT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Empresa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Email" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Email_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pessoa" (
    "id" SERIAL NOT NULL,
    "nome_completo" TEXT NOT NULL,
    "id_empresa" INTEGER NOT NULL,
    "id_email" INTEGER NOT NULL,
    "cargos_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pessoa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "solicitacao_contrato" (
    "id" SERIAL NOT NULL,
    "id_pessoa_solicitante" INTEGER NOT NULL,
    "id_empresa" INTEGER NOT NULL,
    "previsao_inicio_contrato" TIMESTAMP(3) NOT NULL,
    "prazo_contrato" TEXT NOT NULL,
    "retencoes_contratuais" BOOLEAN NOT NULL,
    "seguro_garantido" BOOLEAN NOT NULL,
    "contrato_objeto" TEXT NOT NULL,
    "contrato_obrigacoes_contratante" TEXT NOT NULL,
    "contrato_obrigacoes_contratada" TEXT NOT NULL,
    "com_mao_obra" BOOLEAN NOT NULL,
    "sem_mao_obra" BOOLEAN NOT NULL,
    "data_da_solicitacao" TIMESTAMP(3) NOT NULL,
    "data_da_aprovacao" TIMESTAMP(3) NOT NULL,
    "data_da_reprovacao" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "solicitacao_contrato_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Pessoa" ADD CONSTRAINT "Pessoa_id_empresa_fkey" FOREIGN KEY ("id_empresa") REFERENCES "Empresa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pessoa" ADD CONSTRAINT "Pessoa_id_email_fkey" FOREIGN KEY ("id_email") REFERENCES "Email"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pessoa" ADD CONSTRAINT "Pessoa_cargos_id_fkey" FOREIGN KEY ("cargos_id") REFERENCES "Cargo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "solicitacao_contrato" ADD CONSTRAINT "solicitacao_contrato_id_empresa_fkey" FOREIGN KEY ("id_empresa") REFERENCES "Empresa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "solicitacao_contrato" ADD CONSTRAINT "solicitacao_contrato_id_pessoa_solicitante_fkey" FOREIGN KEY ("id_pessoa_solicitante") REFERENCES "Pessoa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
