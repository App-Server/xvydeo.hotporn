<template>
    <Navbar />

    <div id="container-fc937d79a666574dbebc15156cb96b43"></div>

    <div ref="adContainer" class="d-flex justify-content-center my-3"></div>

    <div class="container text-center">

        <!-- Banner 728x90 -->
        <AdBanner adKey="40664679ff518f84dab3382a567621a7" :width="728" :height="90" />

        <!-- Banner 300x250 -->
        <AdBanner adKey="049b0701e179cb3e1f519ef8fd71391c" :width="300" :height="250" />

        <!-- Banner 468x60 -->
        <AdBanner adKey="a4bd4e1202dd28d332f6b79c9c7e3431" :width="468" :height="60" />

        <!-- Banner 320x50 Mobile -->
        <AdBanner adKey="7d12add979d51f2ef8439c438d487640" :width="320" :height="50" />

    </div>

     <div class="container my-4">
        <div class="row g-3 justify-content-center">

            <div class="col-12 col-md-6 col-lg-4">
                <div class="ratio ratio-16x9">
                    <iframe src="https://www.xvideos.com/embedframe/omvcmlma740" frameborder="0" scrolling="no" allowfullscreen></iframe>
                </div>
            </div>

            <div class="col-12 col-md-6 col-lg-4">
                <div class="ratio ratio-16x9">
                    <iframe src="https://www.xvideos.com/embedframe/omabtace72e" frameborder="0" scrolling="no" allowfullscreen></iframe>
                </div>
            </div>

            <div class="col-12 col-md-6 col-lg-4">
                <div class="ratio ratio-16x9">
                    <iframe src="https://www.xvideos.com/embedframe/ohpfdhdf899" frameborder="0" scrolling="no" allowfullscreen></iframe>
                </div>
            </div>

            <div class="col-12 col-md-6 col-lg-4">
                <div class="ratio ratio-16x9">
                    <iframe src="https://www.xvideos.com/embedframe/uhchkom5e10" frameborder="0" scrolling="no" allowfullscreen></iframe>
                </div>
            </div>

            <div class="col-12 col-md-6 col-lg-4">
                <div class="ratio ratio-16x9">
                    <iframe src="https://www.xvideos.com/embedframe/kvfahpv2789" frameborder="0" scrolling="no" allowfullscreen></iframe>
                </div>
            </div>

            <div class="col-12 col-md-6 col-lg-4">
                <div class="ratio ratio-16x9">
                    <iframe src="https://www.xvideos.com/embedframe/ubmuoifaa69" frameborder="0" scrolling="no" allowfullscreen></iframe>
                </div>
            </div>

        </div>
     </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps({
  adKey: { type: String, required: true },
  format: { type: String, default: 'iframe' },
  height: { type: Number, required: true },
  width: { type: Number, required: true }
})

const adContainer = ref(null)

onMounted(() => {
  if (process.client && adContainer.value) {
    // Configura as opções do anúncio no objeto global da janela
    window.atOptions = {
      key: props.adKey,
      format: props.format,
      height: props.height,
      width: props.width,
      params: {}
    }

    // Cria o script de invocação dinamicamente
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = `https://www.highrevenueformat.com/${props.adKey}/invoke.js`
    
    adContainer.value.appendChild(script)
  }
})
</script>