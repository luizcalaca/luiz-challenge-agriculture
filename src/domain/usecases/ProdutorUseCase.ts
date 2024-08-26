import { cpf, cnpj } from 'cpf-cnpj-validator';
import Produtor from '../entities/Produtor';
import InvalidCPFCNPJ from '../exceptions/InvalidCPFCNPJ';
import ProdutorRepository from '../repositories/ProdutorRepository';
import isCPFOrCNPJ from '../validators/isCPFOrCnpj';
import InvalidCPF from '../exceptions/InvalidCPF';
import InvalidCNPJ from '../exceptions/InvalidCNPJ';

export default class ProdutorUseCase {
  constructor(private produtorRepository: ProdutorRepository) {}

  // eslint-disable-next-line complexity
  public async create(entity: Produtor): Promise<void> {
    console.log('UseCase', entity);

    const cpfOrCnpjType = isCPFOrCNPJ(entity.cpfCnpj);

    if (cpfOrCnpjType === 'Invalid') {
      throw new InvalidCPFCNPJ('O número informado é inválido', 'ValidationError');
    }

    if (cpfOrCnpjType === 'CPF' && !cpf.isValid(entity.cpfCnpj)) {
      throw new InvalidCPF('O número CPF é inválido', 'ValidationError');
    }

    if (cpfOrCnpjType === 'CNPJ' && !cnpj.isValid(entity.cpfCnpj)) {
      throw new InvalidCNPJ('O número CNPJ é inválido', 'ValidationError');
    }

    await this.produtorRepository.create(entity);
  }

  public async update(entity: Produtor): Promise<void> {
    await this.produtorRepository.update(entity);
  }

  public async delete(entity: Produtor): Promise<void> {
    await this.produtorRepository.delete(entity);
  }
}
