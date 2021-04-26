
import React, { PureComponent } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { Label, Button } from 'reactstrap'



export default class ImageUpload extends PureComponent {
  state = {
    src: null,
    crop: {
      unit: '%',
      width: 30,
      aspect: 16 / 9,
    },
  };

  onSelectFile = e => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () =>
        this.setState({ src: reader.result })
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  // If you setState the crop in here you should return false.
  onImageLoaded = image => {
    this.imageRef = image;
  };

  onCropComplete = crop => {
    this.makeClientCrop(crop);
  };

  onCropChange = (crop, percentCrop) => {
    // You could also use percentCrop:
    // this.setState({ crop: percentCrop });
    this.setState({ crop });
  };

  async makeClientCrop(crop) {
    if (this.imageRef && crop.width && crop.height) {
      const croppedImageUrl = await this.getCroppedImg(
        this.imageRef,
        crop,
        'newFile.jpeg'
      );
      this.setState({ croppedImageUrl });
    }
  }

  getCroppedImg(image, crop, fileName) {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        if (!blob) {
          //reject(new Error('Canvas is empty'));
          console.error('Canvas is empty');
          return;
        }
        blob.name = fileName;
        window.URL.revokeObjectURL(this.fileUrl);
        this.fileUrl = window.URL.createObjectURL(blob);
        resolve(this.fileUrl);
      }, 'image/jpeg');
    });
  }

  render() {
    const { crop, croppedImageUrl, src } = this.state;

    return (
      <div className="App">
        <Label style={{ fontSize: '1rem', border: '1px solid #d7dad7', borderRadius: '4px', cursor: 'pointer' }} className={`bg-transparent text-dark border border-none p-2 mt-4 mb-1 ${this.props.className}`}> <input className="d-none" type="file" accept="image/*" onChange={this.onSelectFile} />{this.props.StartIcon} &nbsp; {this.props.text} &nbsp; {this.props.EndIcon} </Label >
        <div className="row align-items-center justify-content-center">
          <div className="col-md-6">
            {src && (
              <>
                <h6 className="text-center fw-bold"> Crop Image </h6>
                <ReactCrop
                  src={src}
                  crop={crop}
                  ruleOfThirds
                  style={{}}
                  onImageLoaded={this.onImageLoaded}
                  onComplete={this.onCropComplete}
                  onChange={this.onCropChange}
                />
              </>
            )}
          </div>
          <div className="col-md-6">
            {croppedImageUrl && (
              <>
                <h6 className="text-center fw-bold"> Image Preview </h6>
                <img alt="Crop" style={{ width: '100%' }} src={croppedImageUrl} />
              </>
            )}
          </div>
          <div className="col-12">
            {croppedImageUrl && (
              <Button className="my-3 bg-transparent p-2 text-dark border border-none" style={{ borderRadius: '4px', fontSize: '14px', fontWeight: '500' }}>Save <i class="fas fa-save ms-1" style={{ color: '#7F48F7' }}></i> </Button>
          )}
          </div>
        </div>
      </div>
    );
  }
}


