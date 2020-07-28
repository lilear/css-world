<template>
  <el-container style="height: 100%;">
  <el-aside width="200px" height="100%" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '3']">
      <div v-for="( v, k ) in items" :key="k">
        <el-submenu :index="`${k}`" v-if="v.children">
          <template slot="title"><i :class="v.icon"></i>{{v.title}}</template>
          <el-menu-item-group >
            <el-menu-item v-for="( vChild, kChild ) in v.children" :key="kChild" :index="`${k}-${kChild}`" :route="{name: vChild.link}">
              <i :class="vChild.icon"></i>
              {{vChild.title}}
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item :index="`${k}`" :route="{name: v.link}" v-else>
          <template slot="title">
            <i :class="v.icon"></i>
            {{v.title}}
          </template>
        </el-menu-item>
      </div>
    </el-menu>
  </el-aside>
  
  <el-container>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</el-container>
</template>

<script>
export default {
  name: "Layout",
  data:() => ({
    items: [
      {
        title: "Css Grid",
        icon: "el-icon-menu",
        link: "CssGrid"
      }
    ]
  })
}
</script>

<style scoped>

</style>