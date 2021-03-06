import Component from '../Component'
class UndoCommandComponent extends Component {

    get name() {
        return 'undo';
    }

    get view() {
        return '<i class="iconfont snow-icon-'+this.name+'"></i>';
    }

    onClick(event) {
        this.editor.exec('undo');
    }
}

export default UndoCommandComponent