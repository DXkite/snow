import RangeComponent from '../Range'
import Layer from '../../../component/poplayer/PopLayer'
import $ from '../../../component/dom/DomElement'
import TextEmotions from './emotion/Text'


class EmotionComponent extends RangeComponent {

    constructor(editor) {
        super(editor);
        var childs = new Array;
        this.editor.config.emotions.forEach(element => {
            var emotion = null;
            if (element.type === 'text') {
                emotion = new TextEmotions(element);
            } else {
                emotion = new SplitEmotions(element);
            }
            if (emotion) {
                emotion.content.forEach(emotionObj => { 
                    const item = $.element('span', {
                        class: 'snow-tool-emotions-item',
                        title: emotionObj.title,
                        onclick: function () {
                            editor.exec('insertHTML', emotionObj.html);
                        }
                    }, {}, emotionObj.view);
                    childs.push(item);
                });
            }
        });
        this.layer = new Layer($.element('div', {}, {}, childs));
    }

    get name() {
        return 'emotion';
    }

    get view() {
        return '<i class="iconfont snow-icon-' + this.name + '"></i>';
    }

    onStatusChange() {
        if (this.editor.range) {
            this._active = true;
            this.editor.$(this.node).removeClass('disable');
        } else {
            this._active = false;
            this.editor.$(this.node).addClass('disable');
        }
    }

    onRangeAction(range, event) {
        this.layer.show();
    }
}

export default EmotionComponent