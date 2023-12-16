 // 생일 데이터 : 년,월,일
export const BIRTHDAY_YEAR_LIST = Array.from(
    { length: 15 },
    (_, i) => `${i + 1990}년`,
  );
export const BIRTHDAY_MONTH_LIST = Array.from({ length: 12 }, (_, i) => `${i + 1}월`);
export const BIRTHDAY_DAY_LIST = Array.from({ length: 31 }, (_, i) => `${i + 1}일`);