<script setup lang="ts">
import Base from "./base.vue";
import BaseCode from "./base.vue?raw";

import Inline from "./inline.vue";
import InlineCode from "./inline.vue?raw";

import Component from "./component.vue";
import ComponentCode from "./component.vue?raw";

import Programmatically from "./programmatically.vue";
import ProgrammaticallyCode from "./programmatically.vue?raw";
</script>

<template>
    <h3 id="base">Base</h3>
    <ExampleViewer :component="Base" :code="BaseCode" />

    <h3 id="inline">Inline</h3>
    <ExampleViewer :component="Inline" :code="InlineCode" />

    <h3 id="component">Component Prop</h3>
    <ExampleViewer :component="Component" :code="ComponentCode" />

    <h3 id="programmatically">Programmatically</h3>
    <ExampleViewer :component="Programmatically" :code="ProgrammaticallyCode" />
</template>
