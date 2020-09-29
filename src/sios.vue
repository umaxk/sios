<template>
<div>
    <label for="app-1" v-html="label"></label>
    <div class="sio-input" @click="open()">
        <div class="sio-block">
            <span :style="((val == '')?'color:rgb(213, 213, 213);':'')" v-html="text_label"></span>
        </div>
    </div>
    <div class="sio-v1">
        <div class="sio-back" @click="close()" v-if="show"></div>
        <div :class="'select-ios ' + (show ? 'sio-open' : '')">
            <div class="sio-container">
                <div class="row sio-position-title">
                    <div class="col-10">
                        <span class="select-ios-name" v-html="label"></span>
                    </div>
                    <div class="select-ios-exit col-2" @click="close()">
                        <img :src="'img/sio/close.svg'" alt="x" />
                    </div>
                </div>
                <!-- sio body -->
                <div class="sio-body">
                    <div class="point row" :key="k" v-for="(v, k) in list" @click="i_check(k)">
                        <div class="col-10 sio-text-check">
                            <span v-html="v.name">-</span>
                        </div>
                        <div class="col-2 sio-check">
                            <img :src="'img/sio/check.svg'" alt="✔" v-if="check_id === v[config.id]" />
                        </div>
                    </div>
                    <div class="empty-list" v-if="list.length == 0">Пусто. 🤨</div>
                </div>
                <!-- sio footer -->
                <div class="sio-footer"></div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
module.exports = {
    props: {
        label: String,
        list: Array,
        value: [String, Number, Object]
    },
    data: function () {
        return {
            val: this.value,
            show: false,
            config: {
                id: "id",
                field: [],
                label: "name",
            },
        };
    },
    computed: {
        text_label: function () {
            if (this.val == "" || this.val === undefined) {
                return this.label;
            } else {
                return this.val[this.config.label];
            }
        },
        check_id: function () {
            return this.val !== undefined ? this.val[this.config.id] : null;
        },
    },
    methods: {
        open: function () {
            this.show = true;
        },
        i_check: function (k) {
            this.val = this.list[k];
            this.$emit("input", this.list[k]);
            this.show = false;
        },
        close: function () {
            this.show = false;
        }
    }
};
</script>

<style>
.select-ios {
    width: 100%;
    min-height: 320px;
    background-color: #fff;
    position: fixed;
    z-index: 999;
    border-radius: 12px;
    margin-top: 7px;
    top: calc(100vh - 0px);
    transition-property: top;
    transition-duration: 0.5s;
}

.sio-open {
    top: calc(100vh - 310px);
    transition-property: top;
    transition-duration: 0.5s;
}

.sio-container {
    margin: auto;
    max-width: 500px;
}

.sio-position-title {
    margin-top: 12px;
}

.select-ios-name {
    padding: 5px;
    padding-left: 15px;
    font-size: 18px;
    font-weight: bold;
}

.select-ios-exit {
    padding-left: 0px;
    text-align: center;
}

.select-ios-exit>img,
svg {
    width: 12px;
}

.sio-body {
    width: 100%;
    padding: 5px 8px 15px 10px;
    max-height: 258px;
    overflow-y: auto;
    overflow-x: hidden;
}

.sio-body>.point {
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #f5f4f4;
}

.sio-text-check>span {
    padding-left: 5px;
}

.sio-check {
    text-align: center;
}

.sio-check>img,
svg {
    width: 15px;
}

.sio-footer {
    width: 100%;
}

.sio-back {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(20, 20, 21, 0.5);
    z-index: 888;
}

.sio-v1 {
    width: 100%;
    padding: 0px;
    margin-left: -14px;
    max-width: 500px;
}

.sio-input {
    width: 100%;
    height: 40px;
    background: #fff;
    border: 1px solid #e3e3e6;
    padding: 40px 10px 10px 10px;
    border-radius: 10px;
}

.sio-block {
    margin-top: -26px;
    max-width: 100%;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
    overflow: hidden;
    -ms-line-clamp: 1;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    display: -webkit-box;
    display: box;
    word-wrap: break-word;
    -webkit-box-orient: vertical;
    box-orient: vertical;
    font-size: 15px;
    line-height: 19px;
}

.point {
    cursor: pointer;
}

.empty-list {
    text-align: center;
    margin-top: 65px;
}
</style>
