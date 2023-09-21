<template>
  <div class="about-company">
    <div class="about-company__left">
      <h5>Заботимся о клиентах</h5>
      <div class="about-company__title about-company__title_mt-12">
        <h1>О компании</h1>
        <ArrowButton name="Узнать больше" type="right" @click="$router.push('/about-us')"/>
      </div>
      <div class="about-company__text about-company__text_mt-24">
<!--        <p>Мы являемся производителями высококачественных питьевых растворов наноминералов в коллоидной форме с высокой концентрацией.</p>-->
<!--        <p>Состав нашей продукции на 100% без ГМО / без СОЛЕЙ / без ПРИМЕСЕЙ , только очищенная вода и частицы металла в наноразмере.</p>-->
        <p>Мы компания ООО “ТД Градалис” являемся российским производителем пищевых добавок и БАДов.</p>
        <p>Производство премиальных высококонцентрированных, натуральных минералов в коллоидной форме.</p>
        <p>В линейке «Звено Жизни» представлены такие продукты как:</p>
        <ul>
          <li>Магний коллоидный 500мкг/мл.</li>
          <li>Цинк коллоидный 300мкг/мл.</li>
          <li>Серебро коллоидное 70мкг/мл.</li>
        </ul>
        <p>Вся продукция прошла лабораторные испытания.</p>
        <p>Особенность коллоидных минералов в том, что все они находятся в самой биодоступной для организма форме.</p>
        <p>Данная форма называется - коллоидная форма.</p>
        <p>Минералы в коллоидной форме превосходят по показателям биоусвоения и чистоты состава такие известные формы как: хелатная; малатная; цитратная; оксидная; и т.д.</p>
        <p>Всё дело в уникальной технологии, которая позволяет превращать металл в подобие «детского питания» для организма.</p>
        <p>Кроме наночастиц того или иного металла и воды, в составе нет ничего, значит, в организм не попадают различные химические «хвостики» и иные вредные компоненты.</p>
        <p>Организму не приходится тратить силы на борьбу с поступившим веществом.</p>
        <p>Благодаря размерам наночастиц (от 1 нанометра), данный металл не нуждается в дополнительной переработке и усваивается организмом на клеточном уровне.</p>
      </div>
      <div class="about-company__count about-company__count_mt-35">
        <div class="about-company__count-item">
          <div class="about-company__count-num">3 000+</div>
          <div class="about-company__count-text info__count-text_mt-2">Довольных клиентов</div>
        </div>
        <div class="about-company__count-item">
          <div class="about-company__count-num">3 000+</div>
          <div class="about-company__count-text about-company__count-text_mt-2">Проведено консультаций</div>
        </div>
        <div class="about-company__count-item">
          <div class="about-company__count-num">15</div>
          <div class="about-company__count-text about-company__count-text_mt-2">Наименований продукции</div>
        </div>
      </div>
    </div>
    <div class="about-company__right">
      <SpecialistServices/>
    </div>
  </div>
</template>

<script>
import ArrowButton from "@/components/Buttons/ArrowButton.vue";
import SpecialistServices from "@/components/SpecialistServices.vue";

export default {
  name: "AboutCompany",
  components: {SpecialistServices, ArrowButton}
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/Views/home/_aboutCompany.scss";
</style>