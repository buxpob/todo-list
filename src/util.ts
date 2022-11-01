export const getFilter = (text: string): string => {
  switch (text) {
    case 'All':
      return '';
    case 'Active':
      return '?completed=false';
    case 'Completed':
      return '?completed=true';
    default:
      return '';
  }
};
