export type Transaction = {
  id: string;
  name: string;
  detail: string;
  amount: string;
  kind: 'expense' | 'income';
  mark: string;
};

export const homeSnapshot = {
  balance: '245,800',
  income: '380,000',
  spent: '134,200',
  spendingPlan: '200,000',
  goal: { name: 'New Laptop', saved: '180,000', target: '500,000', progress: 0.36 },
  upcoming: [
    { name: 'Rent', amount: '120,000', due: 'Due in 8 days', mark: 'R' },
    { name: 'Netflix', amount: '7,000', due: 'Due in 14 days', mark: 'N' },
  ],
  transactions: [
    { id: 'food', name: 'Food', detail: 'Today · 1:24 PM', amount: '−₦8,500', kind: 'expense' as const, mark: 'F' },
    { id: 'freelance', name: 'Freelance income', detail: 'Yesterday · 9:10 AM', amount: '+₦85,000', kind: 'income' as const, mark: '↗' },
    { id: 'transport', name: 'Transport', detail: 'Yesterday · 7:42 AM', amount: '−₦3,200', kind: 'expense' as const, mark: 'T' },
    { id: 'data', name: 'Data', detail: 'Mon, 12 May', amount: '−₦5,000', kind: 'expense' as const, mark: 'D' },
    { id: 'electricity', name: 'Electricity', detail: 'Sun, 11 May', amount: '−₦18,000', kind: 'expense' as const, mark: 'E' },
  ] satisfies Transaction[],
};
