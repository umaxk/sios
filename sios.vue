<template>
<div>
    <label for="app-1" v-html="label"></label>
    <div class="sio-input" @click="open()">
        <div class="sio-block">
            <span v-html="text_label"></span>
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
                    <div class="empty-list" v-if="list.length == 0">
                        Пусто. 🤨
                    </div>
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
    },
    data: function () {
        return {
            show: false,
            value: "",
            puint: -1,
            config: {
                id: "id",
                field: [],
                label: "name",
            },
        };
    },
    computed: {
        text_label: function () {
            if (this.value == "") {
                return this.label;
            } else {
                return this.value[this.config.label];
            }
        },
        check_id: function () {
            return this.value[this.config.id];
        },
    },
    methods: {
        open: function () {
            this.show = true;
        },
        i_check: function (k) {
            this.value = this.list[k];
            this.check = k;
            this.$emit("input", this.list[k]);
            this.show = false;
        },
        close: function () {
            this.show = false;
        },
    },
};
</script>

<style>
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
