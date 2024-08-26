export default function isCPFOrCNPJ(value: string): 'CPF' | 'CNPJ' | 'Invalid' {
  const cpfPattern = /^(\d{3}\.?\d{3}\.?\d{3}-?\d{2})$/;
  const cnpjPattern = /^(\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2})$/;

  if (cpfPattern.test(value)) {
    return 'CPF';
  } if (cnpjPattern.test(value)) {
    return 'CNPJ';
  }
  return 'Invalid';
}
