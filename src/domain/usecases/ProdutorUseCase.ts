import { cpf, cnpj } from 'cpf-cnpj-validator';
import Produtor from '../entities/Produtor';
import InvalidCPFCNPJ from '../exceptions/InvalidCPFCNPJ';
import ProdutorRepository from '../repositories/ProdutorRepository';
import isCPFOrCNPJ from '../validators/isCPFOrCnpj';
import InvalidCPF from '../exceptions/InvalidCPF';
import InvalidCNPJ from '../exceptions/InvalidCNPJ';

export default class ProdutorUseCase {
  constructor(private produtorRepository: ProdutorRepository) {}

  public async create(entity: Produtor): Promise<void> {
    if (isCPFOrCNPJ(entity.cpfCnpj) === 'Invalid')
      throw new InvalidCPFCNPJ('O número informado é inválido', 'ValidationError');

    if (isCPFOrCNPJ(entity.cpfCnpj) === 'CPF' && cpf.isValid(entity.cpfCnpj) === false)
      throw new InvalidCPF('O número CPF é inválido', 'ValidationError');

    if (cnpj.isValid(entity.cpfCnpj) === false)
      throw new InvalidCNPJ('O número CNPJ é inválido', 'ValidationError');

    await this.produtorRepository.create(entity);
  }
}
