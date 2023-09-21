<template>
  <div class="company-info">
    <div class="company-info__row">
      <span>Полное наименование:</span>
      &nbsp;
      <span>ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "ТОРГОВЫЙ ДОМ "ГРАДАЛИС"</span>
    </div>
    <div class="company-info__row">
      <span>Сокращенное наименование:</span>
      &nbsp;
      <span>ООО "ТД "ГРАДАЛИС"</span>
    </div>
    <div class="company-info__row">
      <span>ОГРН:</span>
      &nbsp;
      <span>1211600070417</span>
    </div>
    <div class="company-info__row">
      <span>ИНН:</span>&nbsp;
      <span>1650406360</span>
    </div>
    <div class="company-info__row">
      <span>КПП:</span>&nbsp;
      <span>165001001</span>
    </div>
    <div class="company-info__row">
      <span>Юридический адрес:</span>&nbsp;
      <span>423823, Республика Татарстан, г. Набережные Челны, проспект Сююмбике, д. 40, помещение 54, 55</span>
    </div>
    <div class="company-info__row">
      <span>Генеральный директор:</span>&nbsp;
      <span>Урлагов Александр Андреевич</span>
    </div>
    <div class="company-info__row">
      <span>Банк:</span>&nbsp;
      <span>АО «Тинькофф Банк»</span>
    </div>
    <div class="company-info__row">
      <span>БИК:</span>&nbsp;
      <span>042202847</span>
    </div>
    <div class="company-info__row">
      <span>К/С</span>&nbsp;
      <span>30101810145250000974</span>
    </div>
    <div class="company-info__row">
      <span>Р/С</span>&nbsp;
      <span>40702810810000909818</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CompanyInfo"
}
</script>

<style scoped lang="scss">
.company-info {
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  padding: 24px;
  background: #FFFFFF;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  border-radius: 12px;

  &__row {

    & > span {
      font-weight: 700;
      line-height: 20px;

      &:last-child {
        font-weight: 600;
      }
    }
  }
}
</style>