<script>
export default {
  data() {
    return {
      status: 'idle',
    };
  },
  methods: {
    copy(text) {
      const el = document.createElement('textarea');
      el.value = text;
      el.style.position = 'absolute';
      el.style.left = '-90000px';
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      this.status = "copied";
      setTimeout(() => this.status = "idle", 1000);
    },
  },
  render() {
    return this.$scopedSlots.default({
      status: this.status,
      copy: this.copy
    });
  }
};
</script>