import { Component, Prop, Vue } from 'vue-property-decorator';
import { LooCategory } from '@/models/LooCategory';
import constants from '@/common/constants';

@Component({
  components: {},
})

export default class LooMenu extends Vue {
  private status: string = 'close';
  private constants = constants;
  @Prop() private data!: LooCategory[];
  @Prop() private title!: string;
  // To close menu
  private closeNav() {
    this.status = 'close-menu';
  }
  // To open menu
  private openNav() {
    this.status = 'open-menu';
  }
   // To close menu on selection
  private closeMenu(id: number) {
    this.status = 'close-menu';
    this.$emit('clicked', id);
  }
}
