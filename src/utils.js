

export const capitalize = (str) => str && str[0].toUpperCase() + str.slice(1);

export const getTableNameFromSQLQuery = (query) => {
    const queryWords = query.toLowerCase().split(' ');
    const indexForTableName = queryWords.findIndex(word => word === 'from') + 1;
    const tableName = queryWords[indexForTableName]
        .replace(';', '');
    return tableName;
}