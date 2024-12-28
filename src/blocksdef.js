
import * as generators from './generators/generator'
import * as blocks from './blocks/block';

// 载入图形化模块外观定义文件
Object.assign(Blockly.Blocks, blocks);

// 载入图形化模块python 生成器定义文件
Object.assign(pythonGenerator.forBlock, generators);

