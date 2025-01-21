<template>
  <section class="donate-container">
    <div class="donate-overlay">
      <h1>Ayúdanos a continuar nuestra misión</h1>
      <p>
        Tu donación marcará una diferencia significativa en la vida de las
        personas que apoyamos.
      </p>
      <!-- Botón personalizado de PayPal -->
      <a
        href="https://www.sandbox.paypal.com/donate/?hosted_button_id=ZE2KJG7ESQAWW"
        target="_blank"
        class="donate-button"
      >
        Donar Ahora
      </a>
      <!-- Sección de tarjetas aceptadas -->
      <div class="cards-accepted flex justify-center mt-6">
        <img
          src="@/assets/images/Donar/btn_payMethod_2.png"
          alt="Visa"
          class="w-16 mx-2"
        />
        <img
          src="@/assets/images/Donar/btn_payMethod_3.png"
          alt="MasterCard"
          class="w-16 mx-2"
        />
        <img
          src="@/assets/images/Donar/btn_payMethod_4.png"
          alt="PayPal"
          class="w-16 mx-2"
        />
        <img
          src="@/assets/images/Donar/btn_payMethod_5.png"
          alt="American Express"
          class="w-16 mx-2"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "DonarPage",
};
</script>

<style src="./DonarPage.css"></style>
