<script setup>
import { BasicShadowMap, SRGBColorSpace, NoToneMapping } from 'three';
import { TresCanvas } from '@tresjs/core';
import { OrbitControls, Text3D } from '@tresjs/cientos';

const gl = {
  clearColor: '#82DBC5',
  shadows: true,
  alpha: false,
  shadowMapType: BasicShadowMap,
  outputColorSpace: SRGBColorSpace,
  toneMapping: NoToneMapping,
};
</script>

<template>
  <TresCanvas v-bind="gl">
    <TresPerspectiveCamera :position="[4, 3, 9]" />
    <OrbitControls />
    <TresMesh
      :position="[0, 2, 0]"
    >
    <TresBoxGeometry :args="[10, 10, 10]" />
    <MeshBasicMaterial color="green" />
  </TresMesh>
    <TresDirectionalLight :position="[0, 2, 4]" :intensity="1.2" cast-shadow />
    <TresGridHelper />
  </TresCanvas>
</template>