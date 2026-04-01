<template>
  <div class="card content-box">
    <span class="text"> 引导页 🍓🍇🍈🍉</span>
    <el-alert
      title="引导页对于一些第一次进入项目的人很有用，你可以简单介绍下项目的功能。本 Demo 是基于 driver.js."
      type="warning"
      :closable="false"
    />
    <div id="Geeker">
      <el-button type="primary" @click.prevent.stop="driverObj.drive()"> 打开引导页 🤹‍♂️ </el-button>
    </div>
  </div>
</template>

<script setup lang="ts" name="guide">
import { driver } from 'driver.js'
import 'driver.js/dist/driver.css'

const driverObj = driver({
  allowClose: true,
  doneBtnText: '结束',
  nextBtnText: '下一步',
  prevBtnText: '上一步',
  steps: [
    {
      element: '#collapseIcon',
      popover: {
        title: '折叠图标',
        description: '打开 && 关闭侧边栏',
        side: 'right'
      }
    },
    {
      element: '#breadcrumb',
      popover: {
        title: '面包屑导航',
        description: '显示当前页面位置',
        side: 'right'
      }
    },
    {
      element: '#assemblySize',
      popover: {
        title: '切换尺寸',
        description: '切换系统尺寸',
        side: 'left'
      }
    },
    {
      element: '#language',
      popover: {
        title: '切换语言',
        description: '切换系统语言',
        side: 'left'
      }
    },
    {
      element: '#searchMenu',
      popover: {
        title: '页面搜索',
        description: '页面搜索，快速导航',
        side: 'left'
      }
    },
    {
      element: '#themeSetting',
      popover: {
        title: '设置主题',
        description: '定制设置主题',
        side: 'left'
      }
    },
    {
      element: '#message',
      popover: {
        title: '消息通知',
        description: '可以接收公司信息',
        side: 'left'
      }
    },
    {
      element: '#fullscreen',
      popover: {
        title: '全屏',
        description: '全屏，退出全屏页面',
        side: 'left'
      }
    }
  ]
})
</script>

<style scoped lang="scss" src="./index.scss"></style>
