<template>
  <div id="contents bg-f6f6f6 height-full">
    <v-header></v-header>
    <div id="txt" class="mg-tp30 mg-bt60">
      <div class="inr">
        <p class="ft-26 ft-bold">Run through the rain</p>
        <p>
          <br><br>
          She had been shopping with her Mom in Wal-Mart.
          <br><br>She must have been 6 years old, this beautiful brown haired, <br><br>freckle-faced image of innocence. <br><br>It was pouring outside. The kind of rain that gushes over the top of rain gutters, <br><br>so much in a hurry to hit the Earth, it has no time to flow down the spout.<br><br>
          We all stood there under the awning and just inside the door of the Wal-Mart. <br><br>We all waited, some patiently, <br><br>others irritated, <br><br>because nature messed up their hurried day. <br><br>I am always mesmerized by rainfall. I get lost in the sound and sight of the heavens washing away the dirt and dust of the world.<br><br> Memories of running, splashing so carefree as a child come pouring in as a welcome reprieve from the worries of my day.<br><br>
          Her voice was so sweet as it broke the hypnotic trance we were all caught in, “Mom,<br><br> let's run through the rain." she said.<br><br>
          What? Mom asked.<br><br>
          Let's run through the rain! She repeated.<br><br>
          No, honey. We'll wait until it slows down a bit. Mom replied.<br><br>
          This young child waited about another minute and repeated: "Mom, let's run through the rain."<br><br>
          We'll get soaked if we do. Mom said.<br><br>
          No, we won't, Mom. That's not what you said this morning, <br><br>the young girl said as she tugged at her Mom's arm."<br><br>
          This morning? When did I say we could run through the rain and not get wet?<br><br>
          <div v-for="item in list" class="pic">
            <img :src="item.picUrl" alt="" class="picUrl">
            <p>{{item.title}}</p>
          </div>
          Don't you remember? When you were talking to Daddy about his cancer, you said, If God can get us through this, <br><br>he can get us through anything!<br><br>
          The entire crowd stopped dead silent.<br><br> I swear you couldn't hear anything but the rain.<br><br> We all stood silently. <br><br>No one came or left in the next few minutes. <br><br>Mom paused and thought for a moment about what she would say.<br><br>
          Now some would laugh it off and scold her for being silly. <br><br>Some might even ignore what was said. <br><br>But this was a moment of affirmation in a young child's life.<br><br> Time when innocent trust can be nurtured so that it will bloom into faith.<br><br> "Honey, you are absolutely right. <br><br>Let's run through the rain.<br><br> If get wet, well maybe we just needed washing." Mom said. Then off they ran.<br><br>
          We all stood watching, <br><br>smiling and laughing as they darted past the cars and. They held their shopping bags over their heads just in case. <br><br>They got soaked. But they were followed by a few who screamed and laughed like children all the way to their cars. <br><br>And yes, <br><br>I did. I ran.<br><br> I got wet. I needed <br><br>washing.Circumstances or people can take away your material possessions,<br><br> they can take away your money, <br><br>and they can take away your health. <br><br>But no one can ever take away your precious memories.<br><br> So, don't forget to make time and take the opportunities to make memories every day!<br><br>
          To everything there is a season and a time to every purpose under heaven.<br><br>I hope you still take the time to run through the rain.<br>
        </p>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>
<script>
import header from '@/components/header.vue'
import footer from '@/components/footer.vue'

export default {
  name: 'contact-us',
  data() {
    return {
      list: []
    }
  },
  mounted: function() {
    var that = this;
    that.getData();
  },
  methods: {
    getData() {
      var that = this;
      that.$axios.get('https://api.it120.cc/fashion/banner/list').then(response => {
        console.log(response.data.data)
        that.list = response.data.data;
      }).catch((error) => {

      })
    },
  },
  components: { 'v-header': header, 'v-footer': footer }
}

</script>
<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

</style>
