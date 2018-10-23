/**
 * 组件集
 */
// 图标
import Icon from './components/icon';
// 按钮
import Button from './components/button';
// 栅格
import { Row, Col} from './components/grid';
// 输入框
import Input from './components/input';
// 数字输入框
import InputNumber from './components/input-number';
// 单选框
import Radio from './components/radio';
// 多选框
import Checkbox from './components/checkbox';
// 开关
import Switch from './components/switch';
// 评分
import Rate from './components/rate';
// 进度条
import Progress from './components/progress';
// 警告提示
import Alert from './components/alert';
// 文字提示
import Tooltip from './components/tooltip';
// 徽章
import Badge from './components/badge';
// 标签
import Tag from './components/tag';
// 时间轴
import Timeline from './components/timeline';
// 引用
import Quote from './components/quote';
// 头像
import Avatar from './components/avatar';
// 折叠面板
import Collapse from './components/collapse';
// 卡片
import Card from './components/card';
// 分割线
import Divider from './components/divider';
// 下拉菜单
import Dropdown from './components/dropdown';
// 面包屑
import Crumb from './components/crumb';
// 文字省略
import Ellipsis from './components/ellipsis';

// McakeUI组件集
const Components = {
    Icon,
    Button,
    ButtonGroup: Button.Group,
    Row,
    Col,
    Input,
    InputNumber,
    Radio,
    RadioGroup: Radio.Group,
    Checkbox,
    CheckboxGroup: Checkbox.Group,
    Switch,
    Rate,
    Progress,
    Alert,
    Tooltip,
    Badge,
    Tag,
    Timeline,
    TimelineItem: Timeline.Item,
    Quote,
    Avatar,
    Collapse,
    CollapseItem: Collapse.Item,
    Card,
    Divider,
    Dropdown,
    DropdownMenu: Dropdown.Menu,
    DropdownItem: Dropdown.Item,
    Crumb,
    CrumbItem: Crumb.Item,
    Ellipsis,
};
// 组件安装程序
const install = function (Vue, opts = {}) {
    // 遍历所有组件
    Object.keys(Components).forEach(key => {
        let item = Components[key];
        // 注册当前组件
        Vue.component(item.name, item);

    });
};

// 自动安装
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
// 手动安装对象
const McakeUI = Object.assign({}, Components, {
    version: process.env.VERSION,
    install
});
// 所有组件
console.log(McakeUI);
console.log('目前一共：' + (Object.keys(McakeUI).length - 1) + '个组件');

// 输出
export default McakeUI;
