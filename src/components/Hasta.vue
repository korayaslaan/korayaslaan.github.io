<template>
  <div>
    <div id="div_input_border">
      Ad Soyad:
      <input id="input_location1" type="text" placeholder="Ad Soyad Giriniz" />
    </div>

    <div id="div_input_border">
      Rahatsızlıklar:
      <input
        id="input_location2"
        type="text"
        placeholder="Rahatsızlıklarınızı Giriniz"
      />
    </div>

    <div id="div_input_border">
      Resim Yükleme Ekranı: Lütfen Aşağıya Şikayet Ettiğiniz Rahatsızlık
      Hakkında Bir Fotoğraf Yükleyiniz
    </div>
    <div class="form-group row">
      <div>
        <div class="fileupload fileupload-new" data-provides="fileupload">
          <div class="row">
            <div class="col-md-4">
              <div
                class="fileupload-preview fileupload-exists thumbnail"
                style="max-width: 200px; max-height: 150px; line-height: 20px"
              ></div>
            </div>
            <div class="col-md-2"></div>
          </div>
          <div>
            <span class="btn btn-theme02 btn-file">
              <input id="file" type="file" ref="file" class="default" />
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="tile-footer" id="div_input_border">
      <!-- @click="sendData()" aşağıdaki satırda sayfa yönlendirmesiyle beraber çalışması gerek ama apiyi yüklemediğim için bu şekilde kalmalı-->
      <a id="saveandexitbutton" href="#/Success"><input type="submit" /></a>
     &nbsp;&nbsp;&nbsp;

      <button
        id="saveandexitbutton"
        @click="reload()"
        class="btn btn-secondary"
      >
        İptal
      </button>
    </div>
  </div>
</template>
<style >

     body {
        text-align: center;
        padding: 40px 0;
        background: #EBF0F5;
      }

#div_input_border {
  border: ridge;
  margin: 20px;
  padding: 20px;
}
#input_location1 {
  position: relative;
  left: 35px;
}
#input_location2 {
  position: relative;
  left: 10px;
}
#saveandexitbutton {
  background-color: rgb(170, 189, 204);
}
</style>
<script>
import axios from "axios";

export default {
  data() {
    return {
      result: {
        title: "",
        contect: "",
        img_url: "",
      },
      file: "",
      fileWarn: "",
    };
  },

  created() {
    let dataUrl = "localhost/proje_api/hasta/hasta.php?key=12";
  },

  methods: {
    reload: function () {
      location.reload();
    },

    sendData: function () {
      var url = "localhost/proje_api/hasta/hasta.php?key=12";

      var datas = {
        title: this.result.title,
        contect: this.result.contect,
        img_url: this.result.img_url,
      };

      axios
        .post(url, JSON.stringify(datas))
        .then((response) => {
          if (response.data.data == true) {
            location.reload();
          }
          //conso.log(response);
        })
        .catch((error) => {
          //conso.log(error.response);
        });
    },
  },
};
</script>