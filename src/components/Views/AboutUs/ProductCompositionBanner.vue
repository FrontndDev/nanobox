<template>
  <div class="product-composition-banner">
    <div class="product-composition-banner__left">
      <div class="product-composition-banner__left-up">
        <div class="product-composition-banner__title">
          Состав нашей продукции на 100% без ГМО / без СОЛЕЙ / без ПРИМЕСЕЙ, только очищенная вода и частицы металла в наноразмере.
        </div>

        <div class="product-composition-banner__percents product-composition-banner__percents_mt-30">
          <div>
            <div class="product-composition-banner__more">Более</div>
            <div class="product-composition-banner__number">90</div>
          </div>
          <div>
            <div class="product-composition-banner__percent">%</div>
            <div class="product-composition-banner__percent-title">Биоусвоение наших нанорастворов</div>
          </div>
        </div>

        <div class="product-composition-banner__info product-composition-banner__info_mt-8">
          Вся продукция прошла лабораторные испытания, имеет все необходимые сертификаты,безопасна для человека и животных.
        </div>
      </div>
      <div class="product-composition-banner__left-down product-composition-banner__left-down_mt-30">
        <div class="product-composition-banner__title">В состав нашей продукции входят:</div>

        <div class="product-composition-banner__elements product-composition-banner__elements_mt-16">
          <div>Mg (наномагний)</div>
          <div>Zn (наноцинк)</div>
          <div>Au (нанозолото)</div>
          <div>Ag (наносеребро)</div>
          <div>Se (наноселен)</div>
          <div>Cu (наномедь)</div>
        </div>

        <div class="product-composition-banner__elements-info product-composition-banner__elements-info_mt-20">
          Данные микроэлементы необходимы организму для правильной работы всего организма на клеточном уровне.
        </div>
      </div>
    </div>
    <div class="product-composition-banner__right">
      <LogoForBanner class="product-composition-banner__logo"/>
      <ChemicalElement class="product-composition-banner__element zinc" title="Цинк" name="Zn" color="#D16F4F"/>
      <ChemicalElement class="product-composition-banner__element copper" title="Медь" name="Cu" color="#97CF76"/>
      <ChemicalElement class="product-composition-banner__element magnesium" title="Mагний" name="Mg" color="#24C8BC"/>

      <ChemicalElement class="product-composition-banner__element selenium" title="Селен" name="Se" color="#074B9B"/>
      <ChemicalElement class="product-composition-banner__element gold" title="Золото" name="Au" color="#DFAE00"/>
      <ChemicalElement class="product-composition-banner__element silver" title="Серебро" name="Ag" color="#A4D2EC"/>
    </div>
  </div>
</template>

<script>
import LogoForBanner from "@/components/Views/AboutUs/LogoForBanner.vue";
import ChemicalElement from "@/components/ChemicalElement.vue";

export default {
  name: "ProductCompositionBanner",
  components: {ChemicalElement, LogoForBanner}
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/Views/about-us/_productCompositionBanner.scss";
</style>