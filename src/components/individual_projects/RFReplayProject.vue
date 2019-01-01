<template>
  <v-container>
    <v-layout row wrap justify-center>
      <v-flex lg8 md8 sm10>
        <v-card
        height="500">
          <iframe
          height="100%"
          width="100%"
          src="https://www.youtube-nocookie.com/embed/2QDRJ_KfMeQ"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
        </v-card>
      </v-flex>
      <v-flex lg8 md8 sm10 id="Section1">
        <p>
        The video there is the end product of a process that lasted months, and took me
          from 100% noob to 90% noob within the world of software defined radio (SDR).
        </p>
        <p>
            There's actually a lot of work that goes into SDR projects. You need to understand
            the software portion (be that <a href="https://www.gnuradio.org/">GNU Radio</a>,
            <a href="https://airspy.com/download/">SDR#</a> , or 
            <a href="https://github.com/jopohl/urh">Universal Radio Hacker</a>), you need to
            understand the fundamental principles of radio frequency communication protocols,
            and ideally, you'll have some understanding digital signal processing. I had
            none of those when I started, so this was a rough process to say the least. Luckilly
            I had a ton of help from the guys over at <a href="https://greatscottgadgets.com/sdr/">
            Great Scott Gadgets</a>.
        </p>
      </v-flex>
      <v-flex lg8 md8 sm10 id="Section1">
        <p>
          Instead of providing a complete tutorial on how to pull off the attack, I'll go over the general
          technique at a high level. Here's the deal, your KeyFob produces specific vibrations in the
          electromagnetic material within which we are all immersed. The first step in being able to
          mimic the behaviour of the Fob is to find the frequency that it comminicates at. There are
          standards which you could look into, but it always best to look up the FCC ID of
          your target device.
        </p>
        <p>
          If you look at your Fob, you'll see an FCC ID printed somewhere (though it may be hidden). It's
          mandated by law that any device communicating within a specified set of radio frequencies
          define its behaviour and publish it publicly on the FCC's website. (it's necessary for 
          various reasons, but it's also good news for hackers) There are searchable
          <a href="https://fccid.io/">databases</a> of all of this information, and there is a TON
          of information.
        </p>
      </v-flex>
      <v-flex lg8 md8 sm10>
        <v-card
        id="card-with-image"
        height="500">
        <v-img
        :src="sdrcap"
        width="100%"
        height="100%"/>
        <p id="image-captions" style="text-indent: 0em;">
        (figure 1)
        </p>
        </v-card>
      </v-flex>
      <v-flex lg8 md8 sm10 id="Section1">
        <p>
          Once you've identified the rough frequency range that your device is operating
          on, and you've set up a SDR to listen around that range, you can actually 
          start listening to, or watching (figure 1) it! What you see in that image is
          the RF packet that the Fob is sending. This, in and of itself, is a
          lot of fun. 
        </p>
        <p>
          However, this information is not sufficient to manipulate all systems. For 
          older cars you can actually just record this packet, replay it over a tansmitter,
          and enjoy all the privelages of that Fob indefinitely. For newer systems, or to
          reverse engineer the communication protocols being used, it's probably best to
          take a look at the actual message. Luckily, that's pretty easy too.
        </p>
      </v-flex>
      <v-flex lg8 md8 sm10>
        <v-card
        id="card-with-image"
        height="500">
        <v-img
        :src="image2"
        width="100%"
        height="100%"/>
        <p id="image-captions" style="text-indent: 0em;">
        (figure 2)
        </p>
        </v-card>
      </v-flex>
      <v-flex lg8 md8 sm10 id="Section1">
      <p>
        SDR# is the program that I used to listen to the Fob signal originally. It's free and
        with a lot of very cheap receiving antennas out of the box. This program can capture 
        data from the receiver and record it as a .wav file. The great thing about this is 
        we can just open it up in <a href="https://www.audacityteam.org/">Audacity</a> 
        and investigate/manipulate the packet manually. 
      </p>
      <p>
        You can see the detailed signal in figure 2. This signal is using 
        <a href="https://en.wikipedia.org/wiki/Amplitude-shift_keying">Amplitude Shift Keying</a>.
        The binary bits are, examining the signal visually, "short pulse" and "long pulse". It doesn't 
        matter which is '0' and which is '1', only that they are distinct. 
      </p>
      <p> 
        You can see that there is this span of short pulses at the beginning of the packet (figure 2 is
        actually showing three instances of the same packet sent at different times) which is suspiciously 
        long. This is for synchronization of the Fob transmitter and the vehicle's receiver. It's impossible
        to determining where the data starts without comparing 2 or more unique packets with each other. 
      </p>
      <p>
        The last step of this attack on my vehicle (which does not use
          <a href="https://en.wikipedia.org/wiki/Rolling_code">rolling codes</a>), is to replay the
          packets from the Fob. This is what's shown in the video at the top of the write-up.
      </p>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
export default {
  data() {
    return {
      sdrcap: require('../../assets/sdrcap.png'),
      image2: require('../../assets/signal_image2.png'),
    };
  },
};
</script>

<style scoped>
#Section1{
  margin: 1em;
}
#image-captions{
  text-align: center;
}
#card-with-image{
  margin-bottom: 10px;
}
p{
  text-indent: 1.5em;
}
</style>
